import { JSX } from "preact";
import { useState, useEffect } from "preact/hooks";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";
import { Message } from "./types";

const App = (): JSX.Element => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState<string>("");
  const user: string = "User " + Math.floor(Math.random() * 100);

  const onChange = ({
    currentTarget,
  }: JSX.TargetedEvent<HTMLInputElement, Event>): void =>
    setText(currentTarget.value);

  const onSubmit = (e: JSX.TargetedEvent<HTMLFormElement, Event>): void => {
    e.preventDefault();
    const newMessage: Message = { user, text };
    addDoc(collection(db, "messages"), newMessage);
  };

  useEffect(() => {
    onSnapshot(collection(db, "messages"), (collection) => {
      const currentMessages: Message[] = collection.docs.map(
        (doc: DocumentData): Message => ({
          id: doc.id,
          ...doc.data(),
        })
      );

      setMessages(currentMessages);
    });
  }, []);

  return (
    <>
      <main class="bg-white my-4 mt-10 drop-shadow-lg p-6 w-full lg:w-3/4 rounded-md">
        <h1 class="font-extrabold text-2xl mb-2">Learning firebase</h1>
        <form onSubmit={onSubmit}>
          <label>
            logged in as <strong class="font-extrabold">{user}</strong>
          </label>
          <input
            placeholder="type and press enter to chat"
            class="rounded-md border border-slate-500 p-2 outline-blue-500 w-full mb-2"
            type="text"
            value={text}
            onChange={onChange}
          />
        </form>
        <ul>
          {messages.map((message, index) => (
            <li key={index} class="rounded-md bg-blue-100 my-3 p-2">
              <h4 class="text-sm">
                <strong class="font-extrabold">{message.user}</strong> says:
              </h4>
              <p>{message.text}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export { App };

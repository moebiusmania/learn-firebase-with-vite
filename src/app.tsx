import { JSX } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { db } from "./utils/firebase";
import { getRandomUser } from "./utils";
import {
  collection,
  addDoc,
  onSnapshot,
  DocumentData,
  QuerySnapshot,
} from "firebase/firestore";
import { Message } from "./types";

const App = (): JSX.Element => {
  /**
   * Internal state
   */
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState<string>("");
  const [user] = useState<string>(getRandomUser());

  /**
   * The data received from the <Form /> component when the user types in the input
   */
  const onChange = (value: string): void => setText(value);

  /**
   * When <Form /> is submitted it adds the newly created message into the Firabse database collection
   */
  const onSubmit = (newMessage: Message): void => {
    addDoc(collection(db, "messages"), newMessage);
    setText("");
  };

  /**
   * On component "init" it add a callback for the "onSnapshot" event provided by the Firebase database SDK
   */
  useEffect((): void => {
    /**
     * Every time that the data on Firebase DB changes...
     */
    onSnapshot(
      collection(db, "messages"),
      (collection: QuerySnapshot<DocumentData>): void => {
        /**
         * ...it changes its structure to have id and document data on the same level (removing nesting)...
         */
        const currentMessages: Message[] = collection.docs.map(
          (doc: DocumentData): Message => ({
            id: doc.id,
            ...doc.data(),
          })
        );

        /**
         * ...and set the data in the component state
         */
        setMessages(currentMessages);
      }
    );
  }, []);

  return (
    <main class="bg-white my-4 mt-10 drop-shadow-lg p-6 w-full lg:w-3/4 rounded-md">
      <h1 class="font-extrabold text-2xl mb-2">Learning firebase</h1>
      <Form
        parentChange={onChange}
        parentSubmit={onSubmit}
        user={user}
        text={text}
      />
      <List messages={messages} />
    </main>
  );
};

export { App };

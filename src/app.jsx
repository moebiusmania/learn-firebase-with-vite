import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

const getRandomUser = () => "User " + Math.floor(Math.random() * 100);

const App = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [user] = useState(getRandomUser());

  const onChange = ({ currentTarget }) => setText(currentTarget.value);

  const onSubmit = (e) => {
    e.preventDefault();
    const newMessage = { user, text };
    addDoc(collection(db, "messages"), newMessage);
    setText("");
  };

  useEffect(() => {
    onSnapshot(collection(db, "messages"), (collection) => {
      const currentMessages = collection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setMessages(currentMessages);
    });
  }, []);

  return (
    <>
      <main className="bg-white my-4 mt-10 drop-shadow-lg p-6 w-full lg:w-3/4 rounded-md">
        <h1 className="font-extrabold text-2xl mb-2">Learning firebase</h1>
        <form onSubmit={onSubmit}>
          <label>
            logged in as <strong className="font-extrabold">{user}</strong>
          </label>
          <input
            placeholder="type and press enter to chat"
            className="rounded-md border border-slate-500 p-2 outline-blue-500 w-full mb-2"
            type="text"
            value={text}
            onChange={onChange}
          />
        </form>
        <ul>
          {messages.map((message, index) => (
            <li key={index} className="rounded-md bg-blue-100 my-3 p-2">
              <h2 className="text-sm">
                <strong className="font-extrabold">{message.user}</strong> says:
              </h2>
              <p>{message.text}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export { App };

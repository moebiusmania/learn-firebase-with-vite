import { Message } from "./../types";

type Props = {
  messages: Message[];
};

/**
 * A stateless component that displays the given messages data in an HTML list element
 */
export const List = ({ messages }: Props): JSX.Element => {
  return (
    <ul>
      {messages.map(
        (message: Message, index: number): JSX.Element => (
          <li key={index} class="rounded-md bg-blue-100 my-3 p-2">
            <h2 class="text-sm">
              <strong class="font-extrabold">{message.user}</strong> says:
            </h2>
            <p>{message.text}</p>
          </li>
        )
      )}
    </ul>
  );
};

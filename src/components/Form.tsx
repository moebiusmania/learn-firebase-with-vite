import { Message } from "./../types";

type Props = {
  parentSubmit: Function;
  parentChange: Function;
  user: string;
  text: string;
};

/**
 * A simple form component handling the data from the user and pass it back to its parent
 */
export const Form = ({
  parentSubmit,
  parentChange,
  user,
  text,
}: Props): JSX.Element => {
  const onChange = ({
    currentTarget,
  }: JSX.TargetedEvent<HTMLInputElement, Event>): void =>
    parentChange(currentTarget.value as string);

  const onSubmit = (e: JSX.TargetedEvent<HTMLFormElement, Event>): void => {
    e.preventDefault();
    const newMessage: Message = { user, text };
    parentSubmit(newMessage);
  };

  return (
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
  );
};

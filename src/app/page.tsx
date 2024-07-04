"use client";

import { useChat } from "ai/react";

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "api/chat", // API
  });

  return (
    <main className="max-w-2xl m-auto relative h-screen pt-8">
      <section>
        {messages.map((message) => {
          if (message.role === "user") {
            <main key={message.id} className="">
              <div>
                <p>{message.content}</p>
              </div>
            </main>;
          }

          return (
            <div key={message.id}>
              <p>{message.content}</p>
              <div>{message.role}</div>
            </div>
          );
        })}
      </section>
      <section className="absolute w-full bottom-8 max-w-2xl m-auto bg-red-500">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Type here"
            value={input}
            onChange={handleInputChange}
            className=""
          />
        </form>
      </section>
    </main>
  );
}

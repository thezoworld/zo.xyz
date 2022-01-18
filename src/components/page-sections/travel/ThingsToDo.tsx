import React from "react";

interface ThingsToDoProps {
  things: { id: number; name: string }[];
}

const ThingsToDo: React.FC<ThingsToDoProps> = ({ things }) => {
  return (
    <section>
      <span className="text-3xl font-bold">Things To Do</span>
      <div className="flex my-4 space-x-4 overflow-x-scroll">
        {things.map((t) => (
          <div key={t.id}>
            <div
              style={{ height: 251, width: 251 }}
              className="bg-gray-300 rounded-lg"
            ></div>
            <span className="block mt-2 font-bold">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThingsToDo;

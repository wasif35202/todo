"use client"
import { useState } from "react";

interface Task {
  task: string;
  time: string;
  date: string;
}

export default function Home() {
  const [Task, setTask] = useState<Task[]>([])
  const handleFormData = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const newTask = {
      task: formData.get("task") || "",
      time: formData.get("time") || "",
      date: formData.get("date") || "",
    }


    setTask((prevTask: any) => [...prevTask, newTask])

    event.currentTarget.reset()
    console.log(formData)
    console.log(Task)
  }
  return (
    <div className=" p-5  bg-slate-500 text-white ">
      <h1 className="text-center">To Do App</h1>
      <div className="">

       
          <form onSubmit={handleFormData} className="h-1/2 w-full border flex flex-col gap-2 justify-around items-start p-5" >

            <label htmlFor="task">Write Your Todos</label>
            <textarea name="task" className="bg-transparent rounded-lg border " />
            <label htmlFor="time">Write When Todo</label>
            <input name="time" className="bg-transparent rounded-lg border" type="time" />
            <label htmlFor="date">Write Date</label>
            <input name="date" className="bg-transparent rounded-lg border" type="date" />
            <button type="submit" className="border rounded-lg">Add Task</button>

          </form>
        


        <div className="flex flex-col border">
          <h2 className="mt-4 bg-white text-black">Tasks:</h2>
          <ul>
            {Task.map((task, index) => (
              <li key={index} className="bg-black text-white p-5 mt-5">
                <h1 className="bg-yellow-500 text-black"># {index + 1}</h1>
                <p>Task: {task.task}</p>
                <p>Time: {task.time}</p>
                <p>Date: {task.date}</p>
              </li>
            ))}
          </ul>
        </div>


      </div>


    </div>

  );
}

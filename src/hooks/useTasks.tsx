import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import type { Task, TaskFormData } from "@/components/types";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const { data: tasks, error } = await supabase
      .from("Task")
      .select()
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    setTasks((tasks as Task[]) || []);
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchTasks();
    };

    fetchData();
  }, []);

  const addTask = async (task: TaskFormData) => {
    const { data, error } = await supabase.from("Task").insert(task).select();

    if (error) {
      throw new Error(error.message);
    }

    setTasks((prevTasks) => [data[0], ...prevTasks]);
  };

  const toggleTask = async (id: string) => {
    const task = tasks.find((task) => task.id === id);

    if (!task) {
      throw new Error("Task not found");
    }

    task.completed = !task.completed;

    const { error } = await supabase
      .from("Task")
      .update({ completed: task.completed })
      .eq("id", task.id);

    if (error) {
      throw new Error(error.message);
    }

    setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.id === id
          ? { ...prevTask, completed: task.completed }
          : prevTask
      )
    );
  };

  const deleteTask = async (id: string) => {
    const task = tasks.find((task) => task.id === id);

    if (!task) {
      throw new Error("Task not found");
    }

    const { error } = await supabase.from("Task").delete().eq("id", id);

    if (error) {
      throw new Error(error.message);
    }

    setTasks((prevTasks) => prevTasks.filter((prevTask) => prevTask.id !== id));
  };

  return { tasks, addTask, toggleTask, deleteTask, fetchTasks };
};

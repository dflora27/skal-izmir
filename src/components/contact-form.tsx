"use client";

import { useState } from 'react';

interface ContactFormProps {
  t: {
    formName: string;
    formEmail: string;
    formMsg: string;
    formSubmit: string;
  };
}

export function ContactForm({ t }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "dd6d8db8-07c5-44e5-852c-590dea85e219");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setMessage("Success! Your message has been sent.");
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <div className="flex flex-col">
        <input 
          type="text" 
          name="name"
          required
          className="w-full border-b border-slate-300 py-3 focus:outline-none focus:border-blue-600 transition-colors text-[#0A192F] font-medium" 
          placeholder={t.formName} 
        />
      </div>
      <div className="flex flex-col">
        <input 
          type="email" 
          name="email"
          required
          className="w-full border-b border-slate-300 py-3 focus:outline-none focus:border-blue-600 transition-colors text-[#0A192F] font-medium" 
          placeholder={t.formEmail} 
        />
      </div>
      <div className="flex flex-col">
        <textarea 
          rows={4} 
          name="message"
          required
          className="w-full border-b border-slate-300 py-3 focus:outline-none focus:border-blue-600 transition-colors text-[#0A192F] font-medium resize-none" 
          placeholder={t.formMsg}
        ></textarea>
      </div>
      <button 
        type="submit" 
        disabled={status === "loading"}
        className={`mt-4 px-10 py-5 bg-[#0A192F] text-white text-sm tracking-[0.1em] uppercase font-bold transition-colors duration-500 rounded-xl shadow-lg w-full ${status === "loading" ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-600"}`}
      >
        {status === "loading" ? "..." : t.formSubmit}
      </button>

      {message && (
        <p className={`text-sm font-medium mt-2 text-center ${status === "success" ? "text-green-600" : "text-red-500"}`}>
          {message}
        </p>
      )}
    </form>
  );
}

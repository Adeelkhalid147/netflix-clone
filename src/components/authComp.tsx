"use client";

import Input from "@/components/input";
import React from "react";
import { useCallback, useState } from "react";
import axios from "axios";

const AuthComp = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [variant, setVariant] = useState("login");
  
    const toggleVariant = useCallback(() => {
      setVariant((currentVariant) =>
        currentVariant === "login" ? "register" : "login"
      );
    }, []);
  
    const register = useCallback(async () => {
      try {
        await axios.post("/api/register", {
          email,
          name,
          password,
        });
      } catch (error) {
        console.log(error);
      }
    }, [email, name, password]);
  return (
    <div>
        <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl my-8 font-semibold">
              {variant === "login" ? "sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {/* {variant === "register" && ()} ko use kren gy jb hm ne useracount pe click kr k
            username show krna ho ga */}
              {variant === "register" && (
                <Input
                  label="Username"
                  onChange={(ev: any) => setName(ev.target.value)}
                  id="name"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={(ev: any) => setEmail(ev.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(ev: any) => setPassword(ev.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button
              onClick={register}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {variant === "login" ? "Login" : "Sign Up"}
            </button>
            <p className="text-neutral-500 my-12">
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account"}
              <span
                onClick={toggleVariant}
                className="text-white text-sm ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthComp
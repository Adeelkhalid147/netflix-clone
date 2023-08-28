
import Input from "@/components/input";
import React from "react";
import { useCallback, useState } from "react";
import axios from "axios";
import AuthComp from "@/components/authComp";

const Auth = () => {
 

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <AuthComp/>
    </div>
  );
};

export default Auth;

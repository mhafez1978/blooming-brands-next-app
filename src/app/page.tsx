// "use client";
import type { Metadata } from "next";
import Homepage from "../client/pages/homepage";
//import sequelize from "@/database/dbConfig";

// overide main meta data
// page meta data

export const metadata: Metadata = {
  title: "Mo",
  description: "Created by Mo",
};

export default function Home() {
  // try {
  //   await sequelize.authenticate();
  //   console.log("Connection has been established successfully.");
  // } catch (error) {
  //   console.error("Unable to connect to the database:", error);
  // }
  return (
    <>
      <Homepage />
    </>
  );
}

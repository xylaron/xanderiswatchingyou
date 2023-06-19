import { prisma } from "server/db";
import Head from "next/head";
import { type Employee } from "@prisma/client";
import { GetServerSideProps, type NextPage } from "next/types";

type Props = {
  employees: Employee[];
};

const Employee: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Our Team - XanderIsWatchingYou</title>
      </Head>
      <div className="fadeInUp flex min-h-screen flex-col items-center justify-center p-5">
        <h1 className="mb-12 text-6xl font-extrabold text-white">
          Our <span>Team</span>
        </h1>
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-3">
          {props.employees.map((employee) => (
            <div
              className="w-128 m-4 flex flex-col break-words rounded-3xl bg-neutral-900 p-6 shadow-lg"
              key={employee.id}
            >
              <div className="mb-2 text-4xl font-bold">{employee.name}</div>
              <div className="mb-2 text-2xl font-bold">
                <span>{employee.role}</span>
              </div>
              <div className="mb-8 text-xl"></div>
              <div className="mb-2 text-lg">Email: {employee.email}</div>
              <div className="text-lg">Phone: {employee.phone}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const employees = await prisma.employee.findMany({});
  return {
    props: { employees },
  };
};

export default Employee;

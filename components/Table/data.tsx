type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "489e1d42xx",
    amount: 125,
    status: "failed",
    email: "example@gmail.com",
  },
  {
    id: "489e1d111",
    amount: 125,
    status: "success",
    email: "example@gmail.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "489e1d42190",
    amount: 125,
    status: "pending",
    email: "example@gmail.com",
  },
  {
    id: "489e1d4233",
    amount: 125,
    status: "failed",
    email: "example@gmail.com",
  },
  {
    id: "489e1d4212",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "489e1d4333",
    amount: 125,
    status: "success",
    email: "example@gmail.com",
  },
];

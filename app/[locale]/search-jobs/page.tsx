import mongoose from "mongoose";
import SearchJobs from "./SearchJobs"
import { JobForm } from "@/models/jobForm";

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}


const page = async ({ searchParams }: Props) => {

  const params = await searchParams;
  const urlLocation = params?.location;

  console.log(urlLocation)
  
  mongoose.connect(process.env.MONGO_URL as string);
 
  const jobs = await JobForm.find({
            country: { $regex: urlLocation, $options: "i" },
          });
  const jJobs= JSON.parse(JSON.stringify(jobs));

  return (
    <SearchJobs jobesFetched={jJobs} />
  );
};

export default page;

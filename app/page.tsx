import { FileUploader } from "./components/uploader/FileUploader";

export default function Home() {
  return (
    <div className="mt-20 ml-40 w-[80%]">
      <div>
        <FileUploader apiUrl="/api/upload/" apiRedir="/" />
      </div>
      <div className="mt-20">
        <p>Secondary</p>
        <FileUploader apiUrl="/api/reupload/" apiRedir="/" />
      </div>
    </div>
  );
}

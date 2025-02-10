import { FileUploader } from "./components/uploader/FileUploader";

export default function Home() {
  return (
    <div className="mt-20 ml-40 w-[80%]">
        <FileUploader apiUrl="/api/upload/" apiRedir="/" />
    </div>
  );
}

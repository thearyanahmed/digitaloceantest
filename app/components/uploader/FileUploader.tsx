"use client";
import axios from "axios";
import { useRouter } from 'next/navigation';

import { ChangeEvent, useState } from "react";
import Typography from "@/app/components/UI/Typography";
import ProgressBar from "@/app/components/UI/ProgressBar";

import Button from "@/app/components/UI/Button";

interface FileData {
    id: number;
    name: string;
    percentage: number;
    size: number;
    completed: boolean;
    message: string;
    error: boolean;
}

export function FileUploader({ apiUrl, apiRedir }: { apiUrl: string; apiRedir: string }) {
    const router = useRouter();

    // States
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [progressFiles, setProgressFiles] = useState<FileData[]>([]);
    const [uploadinprogress, setUploadinprogress] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null)

    // Redir is the user is not logged in

    async function uploadFiles() {
        if (selectedFiles.length === 0) {
            setError("Er zijn geen bestanden geselecteerd");
            return;
        }

        console.log("Selected file size:", selectedFiles[0].size);

        for (let fileIndex = 0; fileIndex < selectedFiles.length; fileIndex++) {
            const file = selectedFiles[fileIndex];

            let formData = new FormData();
            formData.append("file", file);

            axios.post(apiUrl, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then((response) => {
                    console.log("response", response);
                })
                .catch(error => {
                    console.log('errored out', error)
                    return [];
                });

            break; // just do with one
        }
    }

    async function onChange(e: ChangeEvent<HTMLInputElement>) {
        // Add files selected to state
        const { files } = e.target;

        if (!files || files.length === 0) {
            console.warn("files list is empty");
            return;
        }
        setSelectedFiles(Array.from(files));
    }

    async function resetFiles() {
        setSelectedFiles([])
    }

    if (uploadinprogress) {
        return (
            <div className="w-full rounded-xl bg-window shadow">
                {progressFiles.map((row, idx) => (
                    <div key={idx} className="flex flex-row p-4">
                        <div className="basis-1/4"><Typography variant="p" color="secondary">{row.name}</Typography></div>
                        <div className="basis-1/4"><Typography variant="p" color="secondary">{Math.round((row.size / (1024 * 1024)) * 10) / 10} MB</Typography></div>
                        <div className="basis-2/4 sm:basis-3/4"><ProgressBar color={row.completed && !row.error ? "green" : row.error ? "red" : "blue"} percentage={row.percentage} message={row.completed && !row.error ? "Succes" : ""} />
                            <Typography variant="verysmall" color="secondary">{row.message}</Typography>

                        </div>
                    </div>
                ))}
            </div>
        )
    }


    // When files are selected show the files
    if (selectedFiles.length > 0) {
        return (
            <div className="w-full rounded-xl bg-window shadow">
                <div className="flex flex-col gap-4">
                    {selectedFiles.map((selectedFile, idx) => (
                        <div key={idx} className="">
                            <Typography variant="p" color="secondary">{selectedFile.name}</Typography>
                        </div>
                    ))}
                </div>
                <br />
                <div className="flex flex-row gap-4">
                    <div className="basis-1/4"><Button fullWidth color="red" onClick={() => resetFiles()}>Opnieuw</Button></div>
                    <div className="basis-3/4"><Button fullWidth color="green" onClick={() => uploadFiles()}>Plaats deze bestanden</Button></div>
                </div>

            </div>
        )
    }



    return (
        <label className="border border-dashed border-secondary hover:border-black rounded-xl bg-gray-100 hover:bg-gray-200 text-[#666666] hover:text-black transition-colors duration-300 h-48 flex items-center justify-center">
            <span className="text-sm font-medium">Selecteer een bestand</span>
            <input
                className="h-0 w-0"
                type="file"
                accept="image/*"
                multiple
                onChange={onChange}
            />
        </label>
    )
}

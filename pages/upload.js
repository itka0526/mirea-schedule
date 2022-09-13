import Head from "next/head";
import DefaultLayout from "../components/DefaultLayout";
import UploadFile from "../components/UploadFile";

export default function Upload() {
    return (
        <DefaultLayout title={"МИРЭА Расписание - Upload"}>
            <UploadFile />
        </DefaultLayout>
    );
}

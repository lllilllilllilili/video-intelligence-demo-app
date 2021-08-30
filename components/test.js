//import { Storage } from "../node_modules/@google-cloud/storage";
export default function test(file) {
  console.log("test");
  let bucketName = "my-bucket";
  //filePath = "./local/path/to/file.txt",
  let filePath = file;
  let destFileName = "file.mp4";
  // [START storage_upload_file]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // The path to your file to upload
  // const filePath = 'path/to/your/file';

  // The new ID for your GCS file
  // const destFileName = 'your-new-file-name';

  // Imports the Google Cloud client library

  // Creates a client
  //const { Storage } = require("@google-cloud/storage");

  // Creates a client
  const storage = new Storage();

  async function uploadFile() {
    await storage.bucket(bucketName).upload(filePath, {
      destination: destFileName,
    });

    console.log(`${filePath} uploaded to ${bucketName}`);
  }

  uploadFile().catch(console.error);
  // [END storage_upload_file]
}

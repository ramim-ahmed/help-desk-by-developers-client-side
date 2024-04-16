import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { PhotoIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
export default function CreatePost() {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="w-full">
          <div className="w-full bg-white p-6 border border-opacity-15 rounded-md ">
            <div className="flex items-center space-x-4">
              <img
                className="w-10 h-10 object-cover rounded-full"
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="bg-gray-100 px-4 py-2 rounded-3xl w-full">
                <p className="text-start font-medium">
                  Share Or Ask Something To Everyone?
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center space-x-2">
                <PhotoIcon className="w-6 h-6 text-green-600" />
                <p>Photo</p>
              </div>
              <div>
                <Button>Create Post</Button>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Post</DialogTitle>
            <DialogDescription>
              <section className="relative">
                <div className="flex sm:flex-nowrap flex-wrap">
                  <div className=" bg-white flex flex-col w-full mt-8 ">
                    <div className="relative mb-4">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div className="relative mb-4 flex justify-between items-center">
                      <div>
                        <label>Platform</label>
                        <Select>
                          <SelectTrigger className="w-[210px]">
                            <SelectValue placeholder="Select Platform" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Website">Website</SelectItem>
                            <SelectItem value="Android App">
                              Android App
                            </SelectItem>
                            <SelectItem value="IOS App">IOS App</SelectItem>
                            <SelectItem value="Desktop App">
                              Desktop App
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label>Post Type</label>
                        <Select>
                          <SelectTrigger className="w-[210px]">
                            <SelectValue placeholder="Select Post Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Bugs">Bugs</SelectItem>
                            <SelectItem value="Improvements">
                              Improvements
                            </SelectItem>
                            <SelectItem value="Feature Request">
                              Feature Request
                            </SelectItem>
                            <SelectItem value="Quaries">Quaries</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="relative mb-4">
                      <label
                        htmlFor="content"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Content
                      </label>
                      <textarea
                        id="content"
                        name="content"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        defaultValue={""}
                      />
                    </div>
                    <div className="relative mb-4">
                      <label
                        htmlFor="photo_url"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Photo URL
                      </label>
                      <input
                        type="url"
                        id="photo_url"
                        name="photo_url"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <Button>Submit Post</Button>
                  </div>
                </div>
              </section>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AddProject() {
  const router = useRouter();
  const [more, setMore] = useState(false);
  const [ishosted, setIshosted] = useState(false);
  const [data, setData] = useState({
    title: "",
    desc: "",
    img: "",
    alt: "",
    hostedLink: "",
    githubLink: "",
  });

  const [imagedata, setImagedata] = useState({
    url: "",
  });
  const [framework, setFramework] = useState({
    name: "",
    logo: "",
  });

  const [details, setDetails] = useState({
    videoLink: "",
    longdesc: "",
  });
  const handleSubmit = async () => {
    const images: any = {
      create: [],
    };
    imagedata.url.split(",").map((image) => {
      url: images.create.push({ url: image.trim() });
    });
    // frameworks
    const fwname: any = [];
    const fwlogo: any = [];
    framework.name.split(",").map((name) => fwname.push(name.trim()));
    framework.logo.split(",").map((logo) => fwlogo.push(logo.trim()));
    const fw: any = {
      create: [],
    };
    for (let i = 0; i < fwname.length; ++i) {
      fw.create.push({
        name: fwname[i],
        logo: fwlogo[i],
      });
    }
    // isMore => false
    const datawithoutpreview = {
      ...data,
      ishosted: ishosted,
      isMore: more,
    };
    //
    const datawithpreview = {
      ...data,
      ishosted: ishosted,
      isMore: more,
      projectDetails: {
        create: [
          {
            ...details,
            images: images,
            frameworks: fw,
          },
        ],
      },
    };
    const finaldata: any = {
      project: more ? datawithpreview : datawithoutpreview,
      more: more,
    };
    try {
      const response = await fetch("/api/project", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(finaldata),
      });

      const res = await response.json();
      if (response.ok) {
        // Check if the response includes a redirect URL
        if (res.redirect) {
          // Redirect to the specified URL
          toast.success(res.message);
          router.replace(res.redirect);
        }
      } else {
        // Print 'not allowed' if the response status is not good
        toast.error(res.message);
      }
    } catch (error) {
      console.error("Server Error:", error);
    }
  };

  return (
    <div className="p-4 space-y-2 ">
      <h1 className="text-2xl text-center xl:text-start first-letter:text-3xl first-letter:text-primary-foreground font-bold">
        Project Detail
      </h1>
      <div className="flex justify-between items-center flex-col xl:flex-row">
        <div className="xl:w-1/2 space-y-2 ">
          <form className="flex flex-col gap-4 xl:w-1/2">
            <Input
              type="text"
              placeholder="Title"
              name="title"
              value={data.title}
              onChange={(e) =>
                setData({
                  ...data,
                  [e.currentTarget.name]: e.currentTarget.value,
                })
              }
              required
            />
            <Input
              type="text"
              placeholder="Short Description"
              name="desc"
              value={data.desc}
              onChange={(e) =>
                setData({
                  ...data,
                  [e.currentTarget.name]: e.currentTarget.value,
                })
              }
              required
            />
            <Input
              type="text"
              placeholder="Showcase Image"
              name="img"
              value={data.img}
              onChange={(e) =>
                setData({
                  ...data,
                  [e.currentTarget.name]: e.currentTarget.value,
                })
              }
              required
            />
            <Input
              type="text"
              placeholder="Alt Attribute"
              name="alt"
              value={data.alt}
              onChange={(e) =>
                setData({
                  ...data,
                  [e.currentTarget.name]: e.currentTarget.value,
                })
              }
              required
            />
            <Input
              type="text"
              placeholder="Hosted Link"
              name="hostedLink"
              value={data.hostedLink}
              onChange={(e) =>
                setData({
                  ...data,
                  [e.currentTarget.name]: e.currentTarget.value,
                })
              }
              required
            />
            <Input
              type="text"
              placeholder="Github Link"
              name="githubLink"
              value={data.githubLink}
              onChange={(e) =>
                setData({
                  ...data,
                  [e.currentTarget.name]: e.currentTarget.value,
                })
              }
              required
            />
            <Button
              type="button"
              className={`text-white w-fit`}
              onClick={() => setIshosted(!ishosted)}
            >
              isHosted = {ishosted ? "yes" : "no"}
            </Button>
          </form>
        </div>
        {more && (
          <div className="xl:w-1/2 space-y-2">
            <form className="flex flex-col gap-4 xl:w-1/2">
              <Input
                type="text"
                placeholder="Video Link (nothing/url)"
                name="videoLink"
                value={details.videoLink}
                onChange={(e) =>
                  setDetails({
                    ...details,
                    [e.currentTarget.name]: e.currentTarget.value,
                  })
                }
                required
              />
              <Textarea
                placeholder="Long Description"
                className="resize-none"
                name="longdesc"
                rows={5}
                cols={50}
                value={details.longdesc}
                onChange={(e) =>
                  setDetails({
                    ...details,
                    [e.currentTarget.name]: e.currentTarget.value,
                  })
                }
              />
              <Input
                type="text"
                placeholder="Image URL (comma seperated)"
                name="url"
                value={imagedata.url}
                onChange={(e) =>
                  setImagedata({
                    ...imagedata,
                    [e.currentTarget.name]: e.currentTarget.value,
                  })
                }
                required
              />
              <Input
                type="text"
                placeholder="Framework Name (comma seperated)"
                name="name"
                value={framework.name}
                onChange={(e) =>
                  setFramework({
                    ...framework,
                    [e.currentTarget.name]: e.currentTarget.value,
                  })
                }
                required
              />
              <Input
                type="text"
                placeholder="Framework Logo (comma seperated)"
                name="logo"
                value={framework.logo}
                onChange={(e) =>
                  setFramework({
                    ...framework,
                    [e.currentTarget.name]: e.currentTarget.value,
                  })
                }
                required
              />
            </form>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 justify-center items-center xl:justify-start xl:items-start">
        <Button
          type="button"
          className="text-white w-1/4"
          onClick={() => setMore(!more)}
        >
          More Details
        </Button>
        <Button
          type="button"
          className="bg-red-500 hover:bg-red-800 text-white w-1/4"
          onClick={handleSubmit}
        >
          Add Project
        </Button>
      </div>
    </div>
  );
}

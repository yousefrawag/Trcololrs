"use client";
import { createClient } from "contentful";
import { useState, useEffect } from "react";

const contentful = createClient({
    space: "hzlcigucxuvs",
    environment: "master",
    accessToken: "shmWIjeLhvIj6KMh78jj3rUwPD4zKM4vRy9zXmOImMw",
});

export const AuthFetchBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await contentful.getEntries({
                content_type: "kayanBlog",
                order: "sys.createdAt",
            });
        
            const CustomezData = response?.items?.map((item) => {
                const { title, details, image } = item.fields;
                const id = item.sys.id;
                const createdAt = item.sys.createdAt;
                const img = image?.fields?.file?.url?.startsWith("//")
                  ? `https:${image.fields.file.url}`
                  : image?.fields?.file?.url;
                return { id, title, details, img, createdAt };
              });    
            

            console.log("Custom Data:", CustomezData); // Verify data mapping
            setBlogs([...CustomezData]); // Update state
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    return { loading, blogs  };
};

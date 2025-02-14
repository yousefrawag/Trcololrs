"use client";
import { createClient } from "contentful";
import { useState, useEffect } from "react";
import authFetch from "./axiosAuthfetch";
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
export const AuthFetchHomeAbout= () => {
    const [homeAbout, setHomeAbout] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await contentful.getEntries({
                content_type: "home-about",
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
            setHomeAbout([...CustomezData]); // Update state
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    return { loading, homeAbout  };
};

export const AuthFetchHomeWhyKayan= () => {
    const [homeKayan, setHomewhyKayan] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await contentful.getEntries({
                content_type: "homePageWhyKayanSection",
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
            setHomewhyKayan([...CustomezData]); // Update state
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    return { loading, homeKayan };
};
export const AuthFetchHomeHero = () => {
    const [homeHero, setHomeHero] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await contentful.getEntries({
                content_type: "homePageHero",
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
            setHomeHero([...CustomezData]); // Update state
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    return { loading, homeHero };
};


export const AuthFetchAboutSection = () => {
    const [AboutSectiondetails, setAboutSection] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await contentful.getEntries({
                content_type: "kayanAboutPageAbout",
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
            setAboutSection([...CustomezData]); // Update state
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    return { loading, AboutSectiondetails };
};




export const AuthFetchServices = () => {
    const [Services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await authFetch("/Services")
        const services = response?.data.data
            
console.log("here" , services);

            
            setServices(services); // Update state
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    return { loading, Services };
};
export const AuthFetchVisa = () => {
    const [Visa, setVisa] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await authFetch("/visav")
        const Visadata = response?.data.data
            
console.log("here" , Visadata);

            
setVisa(Visadata); // Update state
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    return { loading, Visa };
};
export const AuthPoilcy = () => {
    const [Privcypolicy, setPolicy] = useState();
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await authFetch("/prvicy")
        const PrivcyPoilcy = response?.data.data
            
console.log("here" , PrivcyPoilcy);

            
setPolicy(PrivcyPoilcy); // Update state
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    return {Privcypolicy, loading };
};


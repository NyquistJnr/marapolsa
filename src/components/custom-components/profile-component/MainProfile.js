"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "react-bootstrap";

import classes from "./MainProfile.module.css";

import img1 from "../../../../public/images/templates-imgs/dp.png";
import ProfileTabs from "./ProfileTabs";
import { useAuth } from "@/context/AuthContext";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const MainProfile = () => {
  const router = useRouter();

  const { headerName, isAuthenticated } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleUserProfile = async () => {
    try {
      const response = await fetch("/api/profile/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      headerName(data?.data?.username);
      setName(data?.data?.username);
      setEmail(data?.data?.email_address);
    } catch (error) {
      console.error("Signup failed:", error);
      // throw error;
    }
  };

  useEffect(() => {
    handleUserProfile();
  }, [name, email]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/");
      return;
    }
  }, [isAuthenticated]);

  return (
    <Container>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px 0",
        }}
      >
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {name ? (
            <>
              <Image
                src={img1}
                // src="/hello.png"
                alt="DP Image"
                className={classes.imgStyle}
                // priority
                width={200}
                height={200}
              />
              <div style={{ marginTop: 20, fontWeight: "bold", fontSize: 20 }}>
                {name}
              </div>
              <div style={{ marginBottom: 10, fontSize: 13 }}>{email}</div>
              <Link href="/profile/edit" className={`${classes.editBtn} btn`}>
                Edit Profile
              </Link>
            </>
          ) : (
            <>
              <Box padding="6" width="100%">
                <SkeletonCircle size="130" />
                <SkeletonText
                  mt="4"
                  noOfLines={3}
                  spacing="4"
                  skeletonHeight="4"
                />
              </Box>
            </>
          )}
        </div>
      </section>
      <section style={{ marginTop: 20 }}>
        <ProfileTabs />
      </section>
    </Container>
  );
};

export default MainProfile;

import {
  Container,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Center,
  Divider,
  Link,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import Section from "../components/section";
import Expertise from "../components/expertise-box";
import {
  Java,
  React,
  Android,
  Github,
  Linkedin,
  Instagram,
  Facebook,
} from "../components/icons";
import CountUp from "../components/countUp";

const IndexPage = () => {
  return (
    <>
      <Container maxWidth={{ sm: "70%" }} mt='5rem'>
        <Box
          bg={useColorModeValue("darkerBlue", "lightBlue")}
          borderRadius="lg"
          mt={6}
          mb={6}
          p={3}
          textAlign="center"
          color={useColorModeValue("white", "darkerBlue")}
        >
          Yes, I did learn react, nextjs and chakra ui for this website
        </Box>

        <Box
          flexShrink="0"
          display={{ xl: "flex" }}
          align="center"
          p={{ xl: 10 }}
          mb="2rem"
        >
          <Image
            ml={{ lg: "10" }}
            src="/images/profilePic.png"
            alt="Profile pic"
            maxWidth="200px"
            borderRadius="full"
            borderColor={useColorModeValue("darkerBlue", "white")}
            borderStyle="solid"
            borderWidth={2}
          />
          <Box ml={{ xl: "6rem", lg: 5 }} align="left" p={5}>
            <Heading
              as="h1"
              size="xl"
              mb={1}
              color={useColorModeValue("darkerBlue", "white")}
            >
              Hello, I&apos;m Pham Minh Viet
            </Heading>
            <Heading
              size="sm"
              color={useColorModeValue("normalBlue", "lightgray")}
              mb={3}
            >
              Full-stacked developer | Mobile developer
            </Heading>

            <Text>
              At the moment, I&apos;m a student in Swinburne University of Technology
              🙂
            </Text>
            <Text>and this is going to be my portfolio website!</Text>
          </Box>
        </Box>

        <Section delay={0.1}>
          {/* Works */}
          <Heading
            as="h3"
            size="xl"
            variant="section-title"
            align="left"
            mt="10rem"
          >
            Works 
          </Heading>

          <Box display={{ lg: "flex" }}>
            <Box w={{ lg: "55%" }}>
              <Text mb={5}>
                I&apos;m Pham Minh Viet, a student from Vietnam ❤️. I&apos;m major in
                software engineer. I build web applications, mobile applications
                and games using Godot. In the future, I may learn more about AI,
                data engineer or cyber security, which I&apos;m interested in, but at
                the moment, I&apos;m a full-stacked developer.
              </Text>

              <Button
                mb={20}
                pt={1}
                fontWeight="bold"
                fontSize="lg"
                bg={useColorModeValue("darkBlueBlack", "lightBlue")}
                borderStyle="solid"
                borderWidth="2px"
                borderRadius="1px"
                borderColor="black"
                color={useColorModeValue("white", "black")}
                _hover={{
                  bg: useColorModeValue("transparent", "darkBlue"),
                  color: useColorModeValue("darkBlueBlack", "white"),
                }}
              >
                Contact me !
              </Button>
            </Box>

            <Box w={{ lg: "40%" }} align="center">
              <Heading
                size="xl"
                textUnderlineOffset="3px"
                textDecor="underline"
                textDecorationColor="#92a8d1"
                textDecorationThickness="5px"
              >
                IELTs
              </Heading>
              <CountUp />
            </Box>
          </Box>
        </Section>

        <Section delay={0.2}>
          {/* Expertise */}
          <Heading
            as="h3"
            size="xl"
            variant="section-title"
            align="left"
            mt="10rem"
          >
            My skillset 
          </Heading>

          <Box display={{ xl: "flex" }}>
            <Expertise
              header="Software"
              subheader="Development"
              icon={
                <Java
                  boxSize={{ md: "16", base: "14" }}
                  color={useColorModeValue("darkerBlue", "white")}
                  fill="white"
                  mr={"5"}
                  ml={"4"}
                />
              }
              underlineColor="pink"
              text="I have a lot of experiences in 
                building web applications with Java, Spring Boot, MySQL. I also have some knowledge in Data structure in Alogrithm, OOP, database design and Operating System."
            />
            <Expertise
              header="Frontend Dev"
              subheader="Chakra UI, NextJs"
              icon={
                <React
                  boxSize={{ md: "16", base: "14" }}
                  color={useColorModeValue("darkerBlue", "white")}
                  fill="black"
                  mr={"5"}
                  ml={"4"}
                />
              }
              text="I mainly developing in the back end, but I learned Javascript, React, NextJs and Chakra UI to build this website. I also know basic HTML and CSS."
              underlineColor="cyan"
            />
            <Expertise
              header="Mobile Development"
              subheader="Android"
              icon={
                <Android
                  boxSize={{ md: "16", base: "14" }}
                  color={useColorModeValue("darkerBlue", "white")}
                  fill="black"
                  mr={"5"}
                  ml={"4"}
                />
              }
              underlineColor="lightGreen"
              text="I self-taught myself to develop native Android applications using Java and Android Studio. And I&apos;ll learn Kotlin in the future. "
            />
          </Box>
        </Section>

        <Section delay={0.3}>
          {/* Bio */}
          <Heading as="h3" variant="section-title" mt="10rem" mb="2rem">
             Bio 
          </Heading>
          <Box display={{ lg: "flex" }}>
            <Box>
              <Image
                src="/images/greekEdit.png"
                maxW="250px"
                ml={{ sm: "4rem" }}
                alt="GreekEdit"
              />
            </Box>

            <Box ml={{ lg: "4rem" }}>
              <Text display="inline" fontWeight="Bold" fontSize="1.5rem">
                2005:{" "}
              </Text>
              <Text display="inline" fontSize="1.3rem">
                Born in Hanoi, Vietnam
              </Text>

              <Box w="1%" ml={4} mb={4}>
                <Center>
                  <Divider
                    height="35px"
                    orientation="vertical"
                    borderWidth="1px"
                    borderStyle="solid"
                    borderColor={useColorModeValue("black", "white")}
                  />
                </Center>
              </Box>

              <Text display="inline" fontWeight="Bold" fontSize="1.5rem">
                2020{" "}
              </Text>
              <Text display="inline" fontSize="1.3rem">
                Started study programming, learning C and Java
              </Text>
              <br />

              <Box w="1%" ml={4} mb={4}>
                <Center>
                  <Divider
                    height="35px"
                    orientation="vertical"
                    borderWidth="1px"
                    borderStyle="solid"
                    borderColor={useColorModeValue("black", "white")}
                  />
                </Center>
              </Box>

              <Text display="inline" fontWeight="Bold" fontSize="1.5rem">
                2023{" "}
              </Text>
              <Text display="inline" fontSize="1.3rem">
                Applied to Swinburne University in Vietnam
              </Text>
              <br />

              <Box w="1%" ml={4} mb={4}>
                <Center>
                  <Divider
                    height="35px"
                    orientation="vertical"
                    borderWidth="1px"
                    borderStyle="solid"
                    borderColor={useColorModeValue("black", "white")}
                  />
                </Center>
              </Box>

              <Text display="inline" fontWeight="Bold" fontSize="1.5rem">
                2024 ( now ) {" "}
              </Text>
              <Text display="inline" fontSize="1.3rem">
                Studing software engineer and looking for a job
              </Text>
            </Box>
          </Box>

          <Divider
            orientation="horizontal"
            borderWidth="1px"
            borderStyle="solid"
            borderColor={useColorModeValue("black", "white")}
            mt="8rem"
          />
        </Section>

        <Section delay={0.4}>
          {/* I love */}
          <Box display={{ lg: "flex" }}>
            <Box w={{ lg: "45%" }} ml={{ xl: "9rem" }}>
              <Heading variant="section-title" mt="8rem">
                About me
              </Heading>
              <Text>
                I love <strong> new technology, coding </strong> is very fun for
                me (I spend my time mostly in the blackend )
              </Text>
              <Text>
                When I&apos;m not coding, I like to{" "}
                <strong> read books, philosophy</strong> is my favorite genre
                and I love Niezsche works
              </Text>
              <Text>
                I also like <strong>gaming, watching movies</strong> and{" "}
                <strong> spending time with my love one </strong>{" "}
              </Text>
            </Box>

            <Image
              src="/images/socrates.png"
              maxW="300px"
              ml={{ md: "5rem" }}
              alt="Aristotle"
            />
          </Box>

          {/* My social */}

          <Box display={{ lg: "flex" }}>
            <Image
              src="/images/niezsche.jpg"
              maxW="300px"
              ml={{ xl: "8rem" }}
              display={{ base: "none", lg: "block" }}
              alt="Niezsche"
            />

            <Box w={{ lg: "45%" }} ml={{ lg: "10rem" }}>
              <Heading variant="section-title" mt="2rem">
                 My socials
              </Heading>

              <Link
                href="https://github.com/tuturuuu"
                target="_blank"
                fontSize="2rem"
              >
                <Button leftIcon={<Github boxSize="20px" />}>
                  {" "}
                  <Text fontSize="xl">@tuturuuu</Text>{" "}
                </Button>
              </Link>
              <br />
              <Link
                href="https://www.linkedin.com/in/minh-viet-960a251b9/"
                target="_blank"
                fontSize="2rem"
              >
                <Button leftIcon={<Linkedin boxSize="20px" />}>
                  {" "}
                  <Text fontSize="xl">Minh Viet</Text>{" "}
                </Button>
              </Link>

              <br />
              <Link
                href="https://www.instagram.com/pmviet_/"
                target="_blank"
                fontSize="2rem"
              >
                <Button leftIcon={<Instagram boxSize="20px" />}>
                  {" "}
                  <Text fontSize="xl">@pmviet__</Text>{" "}
                </Button>
              </Link>
              <br />
              <Link
                href="https://www.facebook.com/profile.php?id=100004860555884"
                target="_blank"
                fontSize="2rem"
              >
                <Button leftIcon={<Facebook boxSize="25px" />}>
                  {" "}
                  <Text fontSize="xl">Viet Minh</Text>{" "}
                </Button>
              </Link>
            </Box>
          </Box>
        </Section>
      </Container>
    </>
  )
};

export default IndexPage;

import { Container, Box, Heading, Text, Image, Button, Center, Divider } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import Section from "./fragments/section";
import Expertise from "./fragments/expertise-box";
import { Java, React, Android, BirthdayCelebration, JavaCoffee, University, Now } from "./fragments/icons";
import CountUp from "./fragments/countUp";


export default function MainPage() {
  return (
    <>
      <Container maxWidth={{ sm: "70%" }}>
        <Box
          bg="darkBlueBlack"
          borderRadius="lg"
          mt={6}
          mb={6}
          p={3}
          textAlign="center"
          color="white"
        >
          Yes, I did learn react, nextjs and chakra ui for this website
        </Box>

        <Box
          flexShrink="0"
          display={{ lg: "flex" }}
          align="center"
          p={{ xl: 10 }}
          mb="2rem"
        >
          <Image
            ml={{ lg: "10" }}
            src="/images/profilePic.png"
            alt="Profile pic"
            display="inline-block"
            maxWidth="200px"
            borderRadius="full"
            borderColor="lightBrown"
            borderStyle="solid"
            borderWidth={2}
          />
          <Box ml={{ xl: "6rem", lg: 5 }} align="left" p={5}>
            <Heading as="h1" size="xl" mb={1}>
              Hello, I'm Pham Minh Viet
            </Heading>
            <Heading
              size="sm"
              color={useColorModeValue("GrayText", "lightgray")}
              mb={3}
            >
              Full-stacked developer | Mobile developer
            </Heading>

            <Text>
              At the moment, I'm a student in Swinburne University of Technology
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
            /* Works */
          </Heading>

          <Box display={{ lg: "flex" }}>
            <Box w={{ lg: "55%" }}>
              <Text mb={5}>
                I'm Pham Minh Viet, a student from Vietnam ❤️. I'm major in
                software engineer. I build web applications, mobile applications
                and games using Godot. In the future, I may learn more about AI,
                data engineer or cyber security, which I'm interested in, but at
                the moment, I'm a full-stacked developer.
              </Text>

              <Button
                mb={20}
                pt={1}
                fontWeight="bold"
                fontSize="lg"
                bg="darkBlueBlack"
                borderStyle="solid"
                borderWidth="2px"
                borderRadius="1px"
                borderColor="black"
                color="white"
                _hover={{ bg: "transparent", color: "black" }}
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

          {/* Expertise */}
          <Heading
            as="h3"
            size="xl"
            variant="section-title"
            align="left"
            mt="10rem"
          >
            /* My Expertise */
          </Heading>

          <Box display={{ xl: "flex" }}>
            <Expertise
              header="Software"
              subheader="Development"
              icon={
                <Java
                  boxSize={{ md: "16", base: "14" }}
                  color="black"
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
                  color="black"
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
                  color="black"
                  fill="black"
                  mr={"5"}
                  ml={"4"}
                />
              }
              underlineColor="lightGreen"
              text="I self-taught myself to develop native Android applications using Java and Android Studio. And I'll learn Kotlin in the future. "
            />
          </Box>

          {/* Bio */}
          <Heading as="h3" variant="section-title" mt="10rem" mb='2rem'>
            /* Bio */
          </Heading>
          <Box ml='2rem'>
            <BirthdayCelebration boxSize="50px" mb={4} />

            <Text display="inline" fontWeight="Bold" fontSize="1.5rem" ml={5}>
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
                  borderColor="black"
                />
              </Center>
            </Box>

            <JavaCoffee boxSize="50px" mb={4} />

            <Text display="inline" fontWeight="Bold" fontSize="1.5rem" ml={5}>
              2020:{" "}
            </Text>
            <Text display="inline" fontSize="1.3rem">
              Started study programming, learning C and Java
            </Text>
            <br/>

            <Box w="1%" ml={4} mb={4}>
              <Center>
                <Divider
                  height="35px"
                  orientation="vertical"
                  borderWidth="1px"
                  borderStyle="solid"
                  borderColor="black"
                />
              </Center>
            </Box>

            <University boxSize="50px" mb={4} />

            <Text display="inline" fontWeight="Bold" fontSize="1.5rem" ml={5}>
              2023:{" "}
            </Text>
            <Text display="inline" fontSize="1.3rem">
              Applied to Swinburne University in Vietnam
            </Text>
            <br/>

            <Box w="1%" ml={4} mb={4}>
              <Center>
                <Divider
                  height="35px"
                  orientation="vertical"
                  borderWidth="1px"
                  borderStyle="solid"
                  borderColor="black"
                />
              </Center>
            </Box>

            <Now boxSize="50px" mb={4} />
            <Text display="inline" fontWeight="Bold" fontSize="1.5rem" ml={5}>
              2024 ( now ) :{" "}
            </Text>
            <Text display="inline" fontSize="1.3rem">
              Studing software engineer and looking for a job
            </Text>
            <br/>


          </Box>


        </Section>
      </Container>
    </>
  );
}

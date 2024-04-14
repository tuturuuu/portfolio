import { Container, Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import Section from "./fragments/section";
import Expertise from "./fragments/expertise-box";
import { Java, React, Android } from "./fragments/icons";
import { Progress } from '@chakra-ui/react'

export default function MainPage() {
  return (
    <>
      <Container maxWidth="60%">
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
            src="/images/profilePic.png"
            alt="Profile pic"
            display="inline-block"
            maxWidth="200px"
            borderRadius="full"
            borderColor="lightBrown"
            borderStyle="solid"
            borderWidth={2}
          />
          <Box ml={{ xl: 20, lg: 5 }} align="left">
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
          
          <Heading as="h3" size="xl" variant="section-title" align='left'>
          /* Work */
          </Heading>

          <Box display={{lg:'flex'}}>
            <Text mb={20} w={{lg:'45%'}}> I'm Pham Minh Viet, a student from Vietnam ❤️.
              I'm major in software engineer. I build web applications, mobile
              applications and games using Godot.
              In the future, I may learn more about AI, data engineer or cyber
              security, which I'm interested in, but at the moment, I'm a
              full-stacked developer.
            </Text>

            <Box w='50%' ml={{md:'3rem', base:'0'}}>
              <Heading as='h3' size='md' mb='1'>IELTs 7.5/9.0 😘 :</Heading>
              <Progress 
              w='80%'
              borderStyle='solid'
              borderWidth='2px'
              borderColor='black'
              colorScheme='cyan'
              borderRadius={20}
              value={75} 
              mb={3}
              />

              <Heading as='h3' size='md' mb='1'>Hardworking 8/10 🫡 :</Heading>
              <Progress 
              w='80%'
              borderStyle='solid'
              borderWidth='2px'
              borderColor='black'
              colorScheme='black'
              borderRadius={20}
              value={80} 
              mb={3}
              />

              <Heading as='h3' size='md' mb='1'>Creativity 3/10 🤨:</Heading>
              <Progress 
              w='80%'
              borderStyle='solid'
              borderWidth='2px'
              borderColor='black'
              colorScheme='red'
              borderRadius={20}
              value={30} 
              mb={3}
              />

              <Heading as='h3' size='md' mb='1'>Touched grass -1/100 💀:</Heading>
              <Progress 
              w='80%'
              borderStyle='solid'
              borderWidth='2px'
              borderColor='black'
              colorScheme='pink'
              borderRadius={20}
              value={1} 
              mb={3}
              />
              
            </Box>

          </Box>

          

          <Heading as="h3" size="xl" variant="section-title" align="left">
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
          
          
        </Section>
      </Container>
    </>
  );
}

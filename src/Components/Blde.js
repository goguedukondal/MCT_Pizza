import React from 'react'
import { Box, Heading, Text, Flex, Input, Button } from "@chakra-ui/react";
function Blde() {
  return (
    <Box padding="100px"  width="85vw" height="95vh" m="20px" border='1px' borderRadius='10px' borderColor='blue.800'>
      <Flex flexDirection="column" gap="15px" justify="centre">
        <Box>
          <Heading color='blue' >BLDE PAGE</Heading>
        </Box>
        <Box>
          <Text>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </Text>
        </Box>
      </Flex>
    </Box>

  )
}

export default Blde
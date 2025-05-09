import {
  Box,
  Text,
  Card,
  Grid,
  GridItem,
  DataList,
  Badge,
  DataListItemValue,
  Clipboard,
  IconButton,
  Flex,
} from '@chakra-ui/react';

export function EntityDataList() {
  return (
    <>
      <Box display={{ base: 'block', sm: 'none' }}>
        <Card.Root>
          <Card.Body>
            <DataList.Root orientation="horizontal">
              <DataList.Item>
                <DataList.ItemLabel>Entity Ref ID</DataList.ItemLabel>
                <DataList.ItemValue>884213655278</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item>
                <DataList.ItemLabel>Peoplesoft ID</DataList.ItemLabel>
                <DataListItemValue>240213500236</DataListItemValue>
              </DataList.Item>
              <DataList.Item>
                <DataList.ItemLabel>Status</DataList.ItemLabel>
                <DataListItemValue>Closed</DataListItemValue>
              </DataList.Item>
              <DataList.Item>
                <DataList.ItemLabel>Risk rating</DataList.ItemLabel>
                <DataListItemValue>
                  <Badge colorPalette="orange">Medium</Badge>
                </DataListItemValue>
              </DataList.Item>
            </DataList.Root>
          </Card.Body>
        </Card.Root>
      </Box>
      <Box display={{ base: 'none', sm: 'block' }}>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
          gap="{spacing.gutter}"
        >
          <GridItem>
            <Card.Root>
              <Card.Body>
                <Flex justifyContent="space-between" alignItems="center">
                  <DataList.Root>
                    <DataList.Item>
                      <DataList.ItemLabel>Entity Ref ID</DataList.ItemLabel>
                      <DataList.ItemValue>
                        <Text textStyle="lg" fontWeight="semibold">
                          884213655278
                        </Text>
                      </DataList.ItemValue>
                    </DataList.Item>
                  </DataList.Root>
                  <Clipboard.Root value="884213655278">
                    <Clipboard.Trigger asChild>
                      <IconButton variant="ghost" size="xs">
                        <Clipboard.Indicator />
                      </IconButton>
                    </Clipboard.Trigger>
                  </Clipboard.Root>
                </Flex>
              </Card.Body>
            </Card.Root>
          </GridItem>
          <GridItem>
            <Card.Root>
              <Card.Body>
                <Flex justifyContent="space-between" alignItems="center">
                  <DataList.Root>
                    <DataList.Item>
                      <DataList.ItemLabel>Peoplesoft ID</DataList.ItemLabel>
                      <DataList.ItemValue>
                        <Text textStyle="lg" fontWeight="semibold">
                          240213500236
                        </Text>
                      </DataList.ItemValue>
                    </DataList.Item>
                  </DataList.Root>
                  <Clipboard.Root value="240213500236">
                    <Clipboard.Trigger asChild>
                      <IconButton variant="ghost" size="xs">
                        <Clipboard.Indicator />
                      </IconButton>
                    </Clipboard.Trigger>
                  </Clipboard.Root>
                </Flex>
              </Card.Body>
            </Card.Root>
          </GridItem>
          <GridItem>
            <Card.Root>
              <Card.Body>
                <DataList.Root>
                  <DataList.Item>
                    <DataList.ItemLabel>Status</DataList.ItemLabel>
                    <DataList.ItemValue>
                      <Text textStyle="lg" fontWeight="semibold">
                        Closed
                      </Text>
                    </DataList.ItemValue>
                  </DataList.Item>
                </DataList.Root>
              </Card.Body>
            </Card.Root>
          </GridItem>
          <GridItem>
            <Card.Root>
              <Card.Body>
                <DataList.Root>
                  <DataList.Item>
                    <DataList.ItemLabel>Risk rating</DataList.ItemLabel>
                    <DataList.ItemValue>
                      <Badge colorPalette="orange" size="lg">
                        Medium
                      </Badge>
                    </DataList.ItemValue>
                  </DataList.Item>
                </DataList.Root>
              </Card.Body>
            </Card.Root>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

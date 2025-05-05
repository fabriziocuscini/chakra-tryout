import {
  Box,
  Container,
  Heading,
  Link,
  Text,
  HStack,
  VStack,
  Button,
  Stack,
  Separator,
  Icon,
  Card,
  Grid,
  GridItem,
  DataList,
  Badge,
  Tabs,
  Portal,
  Select,
  createListCollection,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowLeft, Check, ClockCounterClockwise, X } from '@phosphor-icons/react';
import { Fragment } from 'react';

export default function Entities() {
  return (
    <Container maxWidth={1650} py={{ base: 4, md: 8 }}>
      <VStack alignItems="stretch" gap="{spacing.gutter.xl}">
        {/* Entity Header */}
        <VStack alignItems="stretch" gap="{spacing.gutter}">
          {/* 1/4: Back link */}
          <Link asChild alignSelf="flex-start">
            <RouterLink to="/">
              <ArrowLeft size={24} />
              <Text as="span">All entities</Text>
            </RouterLink>
          </Link>
          {/* 2/4: Entity heading + workflow actions */}
          <Stack direction={{ base: 'column', md: 'row' }} gap={4} alignItems="flex-start">
            <VStack flex={1} alignItems="flex-start">
              <Heading as="h1" textStyle="4xl">
                The Coca Cola Company
              </Heading>
              <Text color="text.muted">First onboarded on 12 Dec 2023</Text>
            </VStack>
            <HStack gap="{spacing.gutter.sm}" flexWrap="wrap">
              <Button variant={{ base: 'subtle', md: 'ghost' }}>
                <Icon display={{ base: 'none', md: 'block' }}>
                  <ClockCounterClockwise />
                </Icon>
                Show activity log
              </Button>
              <Button variant="subtle">Send for review</Button>
              <Separator
                orientation="vertical"
                height={6}
                mx={2}
                display={{ base: 'none', md: 'block' }}
              />
              <Button variant="subtle" colorPalette="green">
                <Check />
                Approve
              </Button>
              <Button variant="subtle" colorPalette="red">
                <X />
                Reject
              </Button>
            </HStack>
          </Stack>
          {/* 3/4: Info data panels */}
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
            gap="{spacing.gutter}"
          >
            <GridItem>
              <Card.Root>
                <Card.Body>
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
                </Card.Body>
              </Card.Root>
            </GridItem>
            <GridItem>
              <Card.Root>
                <Card.Body>
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
          {/* 4/4: Tabs for sub-navigation */}
          <Box display={{ base: 'block', md: 'none' }}>
            <Select.Root collection={sections} defaultValue={[sections.items[0].value]} size="lg">
              <Select.HiddenSelect />
              <Select.Control>
                <Select.Trigger>
                  <Select.ValueText placeholder="Select framework" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content>
                    {sections.items.map(section => (
                      <Select.Item item={section} key={section.value}>
                        {section.label}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>
          </Box>
          <Box display={{ base: 'none', md: 'block' }}>
            <Tabs.Root defaultValue={sections.items[0].value}>
              <Tabs.List>
                {sections.items.map(section => (
                  <Tabs.Trigger key={section.value} value={section.value}>
                    <Text>{section.label}</Text>
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
            </Tabs.Root>
          </Box>
        </VStack>
        <Card.Root>
          <Card.Header>
            <Heading>Request details</Heading>
          </Card.Header>
          <Card.Body>
            <DataList.Root orientation="horizontal">
              {requestDetails.items.map((item, index) => (
                <Fragment key={item.value}>
                  <DataList.Item>
                    <DataList.ItemLabel minWidth={200}>{item.label}</DataList.ItemLabel>
                    <DataList.ItemValue>{item.value}</DataList.ItemValue>
                  </DataList.Item>
                  {index < requestDetails.items.length - 1 && <Separator />}
                </Fragment>
              ))}
            </DataList.Root>
          </Card.Body>
        </Card.Root>
      </VStack>
    </Container>
  );
}

const sections = createListCollection({
  items: [
    { label: 'Summary', value: 'summary' },
    { label: 'Risk assessment', value: 'risk-assessment' },
    { label: 'Background information', value: 'background-information' },
    { label: 'Related parties', value: 'related-parties' },
    { label: 'Documentation', value: 'documentation' },
  ],
});

const requestDetails = createListCollection({
  items: [
    { label: 'Request ID', value: '10007' },
    { label: 'Template ID', value: '10' },
    { label: 'Primary system', value: 'XTP' },
    { label: 'Account number', value: 'Y5409' },
    { label: 'Account name', value: 'Intermoney Valores Sociedad de Valores S.A.' },
    { label: 'Firm', value: 'MFL' },
    { label: 'Requested by', value: 'ZMayo@marexspectron.com' },
    { label: 'Requested at', value: '28 Sep 2023 15:20:01' },
    { label: 'Amount', value: '291,200.00' },
    { label: 'Currency', value: 'EUR' },
    { label: 'USD equivalent', value: '311,268.16 (€1 = $1.0568)' },
    { label: 'SSI', value: 'HSBC - ****** - ******** - ****** - 4021' },
  ],
});

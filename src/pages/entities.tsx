import {
  Box,
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
  DataListItemValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowLeft, Check, ClockCounterClockwise, X } from '@phosphor-icons/react';
import {
  CalculatedRisk,
  RequestDetails,
  RiskSummary,
  RiskReviewLifecycle,
} from '@sections/entities';

export default function Entities() {
  return (
    <VStack alignItems="stretch" gap="{spacing.gutter}">
      {/* Entity Header */}
      <VStack alignItems="stretch" gap="{spacing.gutter}">
        {/* 1/4: Back link */}
        <Link asChild alignSelf="flex-start" fontSize="sm">
          <RouterLink to="/">
            <ArrowLeft />
            All entities
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
        </Box>

        {/* Tabs for sub-navigation, Select dropdown on small screens */}
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
          <Tabs.Root defaultValue={sections.items[0].value} variant="line">
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
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(12, 1fr)' }}
        gap="{spacing.gutter}"
      >
        <GridItem colSpan={{ base: 1, md: 4 }}>
          <Stack gap="{spacing.gutter}">
            {/* <RiskSummary rating="low" /> */}
            {/* <RiskSummary rating="high" timeAgo="3 weeks ago" navigateTo="/" /> */}
            <RiskSummary
              rating="medium"
              timeAgo="3 weeks ago"
              riskOverride="low"
              FCCReview
              navigateTo="/"
            />
            <CalculatedRisk />
            <RiskReviewLifecycle />
          </Stack>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 8 }}>
          <RequestDetails />
        </GridItem>
      </Grid>
    </VStack>
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

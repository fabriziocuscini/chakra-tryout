import {
  Box,
  Text,
  VStack,
  Stack,
  Grid,
  GridItem,
  Tabs,
  Portal,
  Select,
  createListCollection,
  Link,
} from '@chakra-ui/react';
import { ArrowLeft } from '@phosphor-icons/react';
import { Link as RouterLink } from 'react-router-dom';
import {
  CalculatedRisk,
  RequestDetails,
  RiskSummary,
  RiskReviewLifecycle,
  EntityHeader,
  EntityDataList,
} from '@sections/entities';

export default function Entities() {
  return (
    <VStack alignItems="stretch" gap="{spacing.gutter}">
      {/* 1/4: Back link */}
      <Link asChild alignSelf="flex-start" fontSize="sm">
        <RouterLink to="/">
          <ArrowLeft />
          All entities
        </RouterLink>
      </Link>
      {/* 2/4: Entity header + workflow actions */}
      <EntityHeader />
      {/* 3/4: Info data panels */}
      <EntityDataList />
      {/* 4/4: Tabs for sub-navigation, Select dropdown on small screens */}
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
      {/* Main content sections */}
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
            <RiskReviewLifecycle needsReview />
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

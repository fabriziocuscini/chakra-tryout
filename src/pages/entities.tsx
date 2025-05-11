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
  RiskCategories,
} from '@sections/entities';
import entities from '@/data/entities.json';
import { convertScoreToRating } from '@utils';
import { DueDiligenceLevel, Rating } from '@/types';

export default function Entities() {
  const entity = entities.entities.find(entity => entity.id === '1');

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
      {entity && (
        <>
          <EntityHeader name={entity.name} createdAt={entity.createdAt} />
          <EntityDataList
            entityRef={entity.entityRef}
            psid={entity.PSID}
            status={entity.status}
            riskRating={
              entity.risk.overridden
                ? (entity.risk.override.rating as Rating)
                : convertScoreToRating(entity.risk.score)
            }
          />
        </>
      )}
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
            {entity && (
              <RiskSummary
                score={entity.risk.score}
                lastUpdated={entity?.risk.lastUpdated}
                FCCReview={entity?.risk.FCCAdvisoryRequired}
                riskOverride={
                  entity.risk.overridden ? (entity.risk.override.rating as Rating) : undefined
                }
                overrideDescription={
                  entity.risk.overridden ? entity.risk.override.description : undefined
                }
                navigateTo="/"
              />
            )}
            {entity && (
              <CalculatedRisk
                score={entity.risk.score}
                riskCategories={entity.risk.riskCategories}
              />
            )}
            {entity && (
              <RiskReviewLifecycle
                needsReview={entity?.risk.FCCAdvisoryRequired}
                dueDiligenceLevel={entity?.risk.dueDiligenceLevel as DueDiligenceLevel}
                lastReviewDate={entity?.risk.lastUpdated}
              />
            )}
          </Stack>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 8 }}>
          <Stack gap="{spacing.gutter}">
            {entity && <RequestDetails items={entity.requestDetails} />}
            {entity && <RiskCategories categories={entity.risk.riskCategories} />}
          </Stack>
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

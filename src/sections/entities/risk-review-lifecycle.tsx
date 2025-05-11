import {
  Alert,
  Badge,
  Box,
  Card,
  Circle,
  DataList,
  DataListItem,
  DataListItemLabel,
  DataListItemValue,
  Group,
  Heading,
  HStack,
  Progress,
  Separator,
  Stack,
  Text,
} from '@chakra-ui/react';
import { DueDiligenceLevel } from '@types';

const dueDiligenceLevelConfig: Record<DueDiligenceLevel, { label: string; color: string }> = {
  standard: { label: 'Standard', color: 'blue' },
  enhanced: { label: 'Enhanced', color: 'red' },
  limited: { label: 'Limited', color: 'green' },
};

interface RiskReviewLifecycleProps {
  needsReview?: boolean;
  lastReviewDate?: string;
  dueDiligenceLevel: DueDiligenceLevel;
}

export function RiskReviewLifecycle({
  needsReview = false,
  lastReviewDate,
  dueDiligenceLevel,
}: RiskReviewLifecycleProps) {
  return (
    <Card.Root>
      <Card.Header>
        <Heading size="lg">Risk review lifecycle</Heading>
      </Card.Header>
      <Card.Body pb={3}>
        <Stack gap={4}>
          <Box>
            <Progress.Root
              value={needsReview ? 100 : 80}
              colorPalette={needsReview ? 'warning' : 'neutral'}
              shape="full"
              size="sm"
              height={2}
              variant="subtle"
              mb={2}
            >
              <Progress.Track>
                <Progress.Range />
              </Progress.Track>
            </Progress.Root>
            <HStack justifyContent="space-between" w="full">
              <Text fontSize="xs" fontWeight="medium" color="text.muted">
                Last review
              </Text>
              <Text fontSize="xs" fontWeight="medium" color="text.muted">
                Next review
              </Text>
            </HStack>
          </Box>

          {needsReview && (
            <Alert.Root status="warning" mt={2}>
              <Alert.Indicator />
              <Alert.Title>Periodic review due 24 May 2024</Alert.Title>
            </Alert.Root>
          )}

          <DataList.Root orientation="vertical" pt={2}>
            <DataListItem>
              <DataListItemLabel>Due diligence level</DataListItemLabel>
              <DataListItemValue>
                <Group>
                  <Circle
                    size={2}
                    bg={dueDiligenceLevelConfig[dueDiligenceLevel].color + '.emphasized'}
                  />
                  <Text>{dueDiligenceLevelConfig[dueDiligenceLevel].label}</Text>
                  {/* <Badge colorPalette={dueDiligenceLevelConfig[dueDiligenceLevel].color}>
                    {dueDiligenceLevelConfig[dueDiligenceLevel].label}
                  </Badge> */}
                </Group>
              </DataListItemValue>
            </DataListItem>
          </DataList.Root>
        </Stack>
      </Card.Body>
      <Separator />
      <HStack alignItems="stretch">
        <Card.Body py={3}>
          <DataList.Root orientation="vertical">
            <DataListItem>
              <DataListItemLabel>Last Review Date</DataListItemLabel>
              <DataListItemValue>{lastReviewDate}</DataListItemValue>
            </DataListItem>
          </DataList.Root>
        </Card.Body>
        <Separator orientation="vertical" />
        <Card.Body py={3}>
          <DataList.Root orientation="vertical">
            <DataListItem>
              <DataListItemLabel>Next Review Date</DataListItemLabel>
              <DataListItemValue>24 May 2024</DataListItemValue>
            </DataListItem>
          </DataList.Root>
        </Card.Body>
      </HStack>
    </Card.Root>
  );
}

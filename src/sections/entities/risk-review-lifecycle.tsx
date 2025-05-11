import { Tooltip } from '@/components/ui/tooltip';
import {
  Alert,
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
import { formatDate } from '@utils';
import { addDays, isAfter, differenceInDays, formatDistanceToNow } from 'date-fns';

const dueDiligenceLevelConfig: Record<
  DueDiligenceLevel,
  { label: string; color: string; expiry: number }
> = {
  standard: { label: 'Standard', color: 'blue', expiry: 180 },
  enhanced: { label: 'Enhanced', color: 'red', expiry: 60 },
  limited: { label: 'Limited', color: 'green', expiry: 365 },
};

interface RiskReviewLifecycleProps {
  needsReview?: boolean;
  lastReviewDate?: string;
  dueDiligenceLevel: DueDiligenceLevel;
}

export function RiskReviewLifecycle({
  lastReviewDate,
  dueDiligenceLevel,
}: RiskReviewLifecycleProps) {
  const nextReviewDate = lastReviewDate
    ? addDays(
        new Date(lastReviewDate),
        dueDiligenceLevelConfig[dueDiligenceLevel].expiry
      ).toISOString()
    : undefined;

  const needsReview = nextReviewDate ? isAfter(new Date(), new Date(nextReviewDate)) : false;

  const calculateProgress = (lastReviewDate: string, nextReviewDate: string) => {
    const totalInterval = differenceInDays(new Date(nextReviewDate), new Date(lastReviewDate));
    const elapsedInterval = differenceInDays(new Date(), new Date(lastReviewDate));
    return (elapsedInterval / totalInterval) * 100;
  };

  const progressValue = needsReview
    ? 100
    : lastReviewDate && nextReviewDate
      ? calculateProgress(lastReviewDate, nextReviewDate)
      : 0;

  return (
    <Card.Root>
      <Card.Header>
        <Heading size="lg">Risk review lifecycle</Heading>
      </Card.Header>
      <Card.Body pb={3}>
        <Stack gap={4}>
          <Box>
            <Tooltip
              content={`Today is ${formatDate(new Date().toISOString())}, about ${Math.ceil(
                progressValue
              )}% through the review cycle of ${dueDiligenceLevelConfig[dueDiligenceLevel].expiry} days`}
              positioning={{ placement: 'top' }}
            >
              <Box>
                <Progress.Root
                  value={progressValue}
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
              </Box>
            </Tooltip>
            <Text fontSize="xs" fontWeight="medium" color="text.muted">
              <Text as="span">
                {needsReview ? 'Review was due' : 'Next review'}{' '}
                {nextReviewDate &&
                  formatDistanceToNow(new Date(nextReviewDate), { addSuffix: true })}
              </Text>
            </Text>
          </Box>

          {needsReview && (
            <Alert.Root status="warning" mt={2}>
              <Alert.Indicator />
              <Alert.Title>
                Periodic review due {nextReviewDate && formatDate(nextReviewDate)}
              </Alert.Title>
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
              <DataListItemValue>
                {lastReviewDate ? formatDate(lastReviewDate) : 'N/A'}
              </DataListItemValue>
            </DataListItem>
          </DataList.Root>
        </Card.Body>
        <Separator orientation="vertical" />
        <Card.Body py={3}>
          <DataList.Root orientation="vertical">
            <DataListItem>
              <DataListItemLabel>Next Review Date</DataListItemLabel>
              <DataListItemValue>
                {nextReviewDate ? formatDate(nextReviewDate) : 'N/A'}
              </DataListItemValue>
            </DataListItem>
          </DataList.Root>
        </Card.Body>
      </HStack>
    </Card.Root>
  );
}

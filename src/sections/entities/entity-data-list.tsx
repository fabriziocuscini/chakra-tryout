import { Rating } from '@/types';
import {
  Box,
  Text,
  Card,
  Grid,
  GridItem,
  DataList,
  DataListItemValue,
  Clipboard,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { RiskRatingBadge } from '@components';

interface EntityDataListProps {
  entityRef: string;
  psid: string;
  status: string;
  riskRating: string;
}

export function EntityDataList({ entityRef, psid, status, riskRating }: EntityDataListProps) {
  return (
    <>
      <Box display={{ base: 'block', sm: 'none' }}>
        <Card.Root>
          <Card.Body>
            <DataList.Root orientation="horizontal">
              <DataList.Item>
                <DataList.ItemLabel>Entity Ref ID</DataList.ItemLabel>
                <DataList.ItemValue>{entityRef}</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item>
                <DataList.ItemLabel>Peoplesoft ID</DataList.ItemLabel>
                <DataListItemValue>{psid}</DataListItemValue>
              </DataList.Item>
              <DataList.Item>
                <DataList.ItemLabel>Status</DataList.ItemLabel>
                <DataListItemValue>{status}</DataListItemValue>
              </DataList.Item>
              <DataList.Item>
                <DataList.ItemLabel>Risk rating</DataList.ItemLabel>
                <DataListItemValue>
                  <RiskRatingBadge rating={riskRating as Rating} />
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
                          {entityRef}
                        </Text>
                      </DataList.ItemValue>
                    </DataList.Item>
                  </DataList.Root>
                  <Clipboard.Root value={entityRef}>
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
                          {psid}
                        </Text>
                      </DataList.ItemValue>
                    </DataList.Item>
                  </DataList.Root>
                  <Clipboard.Root value={psid}>
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
                        {status}
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
                      <RiskRatingBadge rating={riskRating as Rating} size="lg" />
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

import { useQuery } from '@tanstack/react-query';
import { fetchEntities, fetchEntityById } from '@services/api';

// Query keys for caching and invalidation
export const entityKeys = {
  all: ['entities'] as const,
  byId: (id: string) => [...entityKeys.all, id] as const,
};

// Hook to fetch all entities
export function useEntities() {
  return useQuery({
    queryKey: entityKeys.all,
    queryFn: fetchEntities,
  });
}

// Hook to fetch a single entity by ID
export function useEntity(id: string) {
  return useQuery({
    queryKey: entityKeys.byId(id),
    queryFn: () => fetchEntityById(id),
    enabled: !!id, // Only run the query if we have an ID
  });
}

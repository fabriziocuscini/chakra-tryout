import { Entity } from '@/types';

// JSONBIN.io API configuration
// In production, these should be loaded from environment variables
const JSONBIN_API_URL = 'https://api.jsonbin.io/v3';
const BIN_ID = '6820ba368a456b79669ba6ad';
const X_MASTER_KEY = '$2a$10$NIdIwK03./GNSIr1NFvmO.DfyQ7RGzZbuWVpC3p8PTMUf.IacqxjW';
const X_ACCESS_KEY = '$2a$10$6txGL6LjaVHDMAhc9.7D0uSF7mzA9M32KDV9nnxKH0RDLPJ5iNoE6';

/**
 * Fetches all entities from JSONBIN.io
 *
 * @returns Promise that resolves to an object containing the entities array
 */
export async function fetchEntities(): Promise<{ entities: Entity[] }> {
  try {
    const response = await fetch(`${JSONBIN_API_URL}/b/${BIN_ID}`, {
      method: 'GET',
      headers: {
        'X-Master-Key': X_MASTER_KEY,
        'X-Access-Key': X_ACCESS_KEY,
        'X-Bin-Meta': 'false',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch data from JSONBIN');
    }

    // Parse response data
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching entities:', error);
    throw error;
  }
}

/**
 * Fetches a single entity by ID from JSONBIN.io
 *
 * @param id - The ID of the entity to fetch
 * @returns Promise that resolves to the entity or undefined if not found
 */
export async function fetchEntityById(id: string): Promise<Entity | undefined> {
  try {
    const response = await fetch(`${JSONBIN_API_URL}/b/${BIN_ID}`, {
      method: 'GET',
      headers: {
        'X-Master-Key': X_MASTER_KEY,
        'X-Access-Key': X_ACCESS_KEY,
        'X-Bin-Meta': 'false',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch data from JSONBIN');
    }

    // Parse response data and find the entity with the matching ID
    const data = await response.json();
    const entity = data.entities.find((entity: Entity) => entity.id === id);
    return entity;
  } catch (error) {
    console.error(`Error fetching entity with ID ${id}:`, error);
    throw error;
  }
}

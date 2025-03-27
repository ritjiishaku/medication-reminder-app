const API_BASE = 'https://api.fda.gov/drug';

export const searchDrugs = async (query) => {
  try {
    const response = await fetch(`${API_BASE}/label.json?search=openfda.brand_name:${query}&limit=5`);
    const data = await response.json();
    return data.results?.map(item => ({
      name: item.openfda?.brand_name?.[0] || query,
      dosageForms: item.openfda?.dosage_form?.join(', ') || 'Not specified',
      route: item.openfda?.route?.join(', ') || 'Not specified',
      exactMatch: item.openfda?.brand_name?.[0]?.toLowerCase() === query.toLowerCase()
    })) || [];
  } catch (error) {
    console.error('Drug API error:', error);
    return [];
  }
};

export const getDosageOptions = async (drugName) => {
  try {
    const response = await fetch(`${API_BASE}/event.json?search=patient.drug.medicinalproduct:${drugName}&count=patient.drug.drugdosageform.exact`);
    const data = await response.json();
    return data.results?.map(item => ({
      value: item.term,
      label: item.term
    })) || [];
  } catch (error) {
    console.error('Dosage API error:', error);
    return [];
  }
};
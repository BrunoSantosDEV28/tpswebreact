import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY as string;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const insertData = async (table: string, data: object) => {
  const { data: insertedData, error } = await supabase
    .from(table)
    .insert([data]);
  if (error) {
    console.error("Erro ao inserir dados:", error.message);
    throw error;
  }
  return insertedData;
};

export const updateData = async (
  table: string,
  id: string | number,
  data: object
) => {
  const { data: updatedData, error } = await supabase
    .from(table)
    .update(data)
    .eq("id", id);
  if (error) {
    console.error("Erro ao atualizar dados:", error.message);
    throw error;
  }
  return updatedData;
};

export const deleteData = async (table: string, id: string | number) => {
  const { data: deletedData, error } = await supabase
    .from(table)
    .delete()
    .eq("id", id);
  if (error) {
    console.error("Erro ao deletar dados:", error.message);
    throw error;
  }
  return deletedData;
};

export const fetchData = async (table: string) => {
  const { data: fetchedData, error } = await supabase.from(table).select("*");
  if (error) {
    console.error("Erro ao buscar dados:", error.message);
    throw error;
  }
  return fetchedData;
};

export const fetchDataWithFilter = async (
  table: string,
  column: string,
  value: string | number
) => {
  const { data: filteredData, error } = await supabase
    .from(table)
    .select("*")
    .eq(column, value);
  if (error) {
    console.error("Erro ao buscar dados filtrados:", error.message);
    throw error;
  }
  return filteredData;
};

export default supabase;

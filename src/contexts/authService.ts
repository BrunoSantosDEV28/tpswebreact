import { supabase } from "../services/supabaseClient";

export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Erro ao fazer logout:", error);
  } else {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");

    console.log("Logout realizado com sucesso.");
  }
};

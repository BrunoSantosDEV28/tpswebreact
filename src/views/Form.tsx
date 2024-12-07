import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../services/supabaseClient";
import {
  TextField,
  Button,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Form = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    coluna1: "",
    coluna2: "",
  });
  const [isDeleting, setIsDeleting] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const { data, error } = await supabase
          .from("nome_da_tabela")
          .select("*")
          .eq("id", id)
          .single();
        if (error) {
          console.error("Erro ao buscar dados:", error);
        } else {
          setFormData(data);
        }
      }
    };
    fetchData();
  }, [id]);

  const handleSave = async () => {
    if (id) {
      const { error } = await supabase
        .from("nome_da_tabela")
        .update(formData)
        .eq("id", id);
      if (error) {
        console.error("Erro ao atualizar dados:", error);
      } else {
        alert("Item atualizado com sucesso!");
        navigate("/dashboard");
      }
    } else {
      const { error } = await supabase
        .from("nome_da_tabela")
        .insert([formData]);
      if (error) {
        console.error("Erro ao inserir dados:", error);
      } else {
        alert("Item inserido com sucesso!");
        navigate("/dashboard");
      }
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    const { error } = await supabase
      .from("nome_da_tabela")
      .delete()
      .eq("id", id);
    setIsDeleting(false);
    if (error) {
      console.error("Erro ao deletar dados:", error);
    } else {
      alert("Item deletado com sucesso!");
      setOpenConfirm(false);
      navigate("/dashboard");
    }
  };

  const handleOpenConfirm = () => setOpenConfirm(true);
  const handleCloseConfirm = () => setOpenConfirm(false);

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <h2>{id ? "Editar Item" : "Adicionar Item"}</h2>
          {id && (
            <IconButton
              color="inherit"
              onClick={handleOpenConfirm}
              disabled={isDeleting}
            >
              <DeleteIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <TextField
        label="Coluna 1"
        value={formData.coluna1}
        onChange={(e) => setFormData({ ...formData, coluna1: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Coluna 2"
        value={formData.coluna2}
        onChange={(e) => setFormData({ ...formData, coluna2: e.target.value })}
        fullWidth
        margin="normal"
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        style={{ marginTop: "16px" }}
      >
        {id ? "Atualizar" : "Salvar"}
      </Button>

      {}
      <Dialog open={openConfirm} onClose={handleCloseConfirm}>
        <DialogTitle>Confirmar Exclusão</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tem certeza de que deseja excluir este item? Essa ação não pode ser
            desfeita.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirm} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Form;

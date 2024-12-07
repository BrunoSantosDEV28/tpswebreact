import React, { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import {
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Container,
} from "@mui/material";

const Home = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const itemsPerPage = 10;

  const fetchItems = async () => {
    setLoading(true);
    const from = (page - 1) * itemsPerPage;
    const to = from + itemsPerPage - 1;

    const { data, error } = await supabase
      .from("nome_da_tabela")
      .select("*")
      .order("id", { ascending: false })
      .range(from, to);

    setLoading(false);

    if (error) {
      console.error("Erro ao buscar itens:", error);
    } else {
      setItems((prevItems) => [...prevItems, ...data]);
      if (data.length < itemsPerPage) {
        setHasMore(false);
      }
    }
  };

  useEffect(() => {
    fetchItems();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      if (hasMore && !loading) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMore, loading]);

  return (
    <Container>
      <h1>Lista de Itens</h1>
      <List>
        {items.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={`Coluna 1: ${item.coluna1}`}
              secondary={`Coluna 2: ${item.coluna2}`}
            />
          </ListItem>
        ))}
      </List>
      {loading && <CircularProgress />}
      {!hasMore && <p>Todos os itens foram carregados.</p>}
    </Container>
  );
};

export default Home;

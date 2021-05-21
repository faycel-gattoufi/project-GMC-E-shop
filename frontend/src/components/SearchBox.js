import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const SearchBox = ({ history }) => {
  const { t } = useTranslation();
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder={t("search_products")}
        className="mr-sm-2 ml-sm-2 "
        style={{ borderRadius: "10px" }}
      ></Form.Control>
      <Button
        type="submit"
        variant="outline-success"
        className="p-2"
        style={{ borderRadius: "10px" }}
      >
        {t("search")}
      </Button>
    </Form>
  );
};

export default SearchBox;

import PaginationButton from "component/@shared/PaginationButton/PaginationButton";
import Pagination from "component/@shared/Pagination/Pagination";

export default {
  title: "Pagination",
  component: Pagination,
};

export const DefaultPagination = (args) => <Pagination {...args}></Pagination>;

DefaultPagination.args = {
  children: [
    <PaginationButton>1</PaginationButton>,
    <PaginationButton>2</PaginationButton>,
    <PaginationButton>3</PaginationButton>,
    <PaginationButton>4</PaginationButton>,
    <PaginationButton>5</PaginationButton>,
    <PaginationButton>6</PaginationButton>,
  ],
};
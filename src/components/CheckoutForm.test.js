import React from "react";
import { render,screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    const header = screen.queryByText(/form/i)
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    const firstName =screen.getByLabelText(/first name/i);
    const lastName =screen.getByLabelText(/last name/i);
    const address =screen.getByLabelText(/address/i);
    const city =screen.getByLabelText(/city/i);
    const state =screen.getByLabelText(/state/i);
    const zip =screen.getByLabelText(/zip/i);
    const button = screen.getByRole("button");

    userEvent.type(firstName, 'Luis');
    userEvent.type(lastName, 'Garcia');
    userEvent.type(address, '2132 E WISCONSIN RD');
    userEvent.type(city, 'Edinburg');
    userEvent.type(state, 'TX');
    userEvent.type(zip, '78542');
    userEvent.click(button);

    const success =screen.queryByText(/woo-hoo/i);
    expect(success).toBeInTheDocument()



});

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}


const handleDragStart = (event) => {}
const handleDragEnd = (event) => {}
const handleHelpToggle = (event) => {}
const handleAddToggle = (event) => {}
const handleAddSubmit = (event) => {}
const handleEditToggle = (event) => {}
const handleEditSubmit = (event) => {}
const handleDelete = (event) => {}

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}

import { data } from "./data.js";
import { view } from "./view.js";

const app = {
  init: function() {
    view.init();
    this.setupEventListeners();
  },

  setupEventListeners: function() {
    // "Add Order" button should start as focused
    view.addOrderButton.focus();

    // Add event listener to the "?" icon
    view.helpButton.addEventListener("click", function() {
      view.showHelpOverlay();
    });

    // Add event listener to the "Close" button in the overlay
    view.closeButton.addEventListener("click", function() {
      view.hideOverlay();
      view.addOrderButton.focus();
    });

    // Add event listener to the "Add Order" button
    view.addOrderButton.addEventListener("click", function() {
      view.showAddOrderOverlay();
    });

    // Add event listener to the "Cancel" button in the "Add Order" overlay
    view.addOrderCancelButton.addEventListener("click", function() {
      view.hideOverlay();
      view.clearAddOrderForm();
    });

    // Add event listener to the "Add" button in the "Add Order" overlay
    view.addOrderAddButton.addEventListener("click", function() {
      const newOrder = view.getAddOrderFormValues();
      if (newOrder.orderText && newOrder.tableNumber) {
        data.addOrder(newOrder.orderText, newOrder.tableNumber, "ordered");
        view.render();
        view.hideOverlay();
        view.clearAddOrderForm();
      }
    });

    // Add event listener to the "Edit Order" button in each order element
    view.orderElements.forEach(function(orderElement) {
      orderElement.querySelector(".edit-order-button").addEventListener("click", function() {
        const order = data.getOrderById(orderElement.dataset.orderId);
        view.showEditOrderOverlay(order);
      });
    });

    // Add event listener to the "Delete" button in the "Edit Order" overlay
    view.editOrderDeleteButton.addEventListener("click", function() {
      const orderId = view.editOrderOverlay.dataset.orderId;
      data.removeOrder(orderId);
      view.render();
      view.hideOverlay();
      view.addOrderButton.focus();
    });

    // Add event listener to the "Cancel" button in the "Edit Order" overlay
    view.editOrderCancelButton.addEventListener("click", function() {
      view.hideOverlay();
      view.addOrderButton.focus();
    });

    // Add event listener to the "Update" button in the "Edit Order" overlay
    view.editOrderUpdateButton.addEventListener("click", function() {
      const orderId = view.editOrderOverlay.dataset.orderId;
      const updatedOrder = view.getEditOrderFormValues();
      data.updateOrder(orderId, updatedOrder.orderText, updatedOrder.tableNumber, updatedOrder.status);
      view.render();
      view.hideOverlay();
      view.addOrderButton.focus();
    });

    // Add event listener to the "Status" select in the "Edit Order" overlay
    view.editOrderStatusSelect.addEventListener("change", function() {
      const orderId = view.editOrderOverlay.dataset.orderId;
      const newStatus = view.editOrderStatusSelect.value;
      data.moveOrder(orderId, newStatus);
      view.render();
    });

    // Add event listeners for drag and drop functionality
    view.columns.forEach(function(column) {
      column.addEventListener("dragover", handleDragOver);
      column.addEventListener("dragenter", handleDragEnter);
      column.addEventListener("dragleave", handleDragLeave);
      column.addEventListener("drop", handleDrop);
    });

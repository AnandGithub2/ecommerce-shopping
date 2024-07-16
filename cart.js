$(document).ready(function() {
    // Decrease quantity button
    $('.decrease-quantity').click(function() {
        var quantityElement = $(this).siblings('.quantity');
        var currentQuantity = parseInt(quantityElement.text());
        if (currentQuantity > 1) {
            quantityElement.text(currentQuantity - 1);
            updateCartTotals();
        }
    });

    // Increase quantity button
    $('.increase-quantity').click(function() {
        var quantityElement = $(this).siblings('.quantity');
        var currentQuantity = parseInt(quantityElement.text());
        quantityElement.text(currentQuantity + 1);
        updateCartTotals();
    });

    // Remove from cart button
    $('.remove-from-cart').click(function() {
        $(this).closest('.card').remove(); // Remove the entire card from the DOM
        updateCartTotals();
    });

    // Function to update cart totals
    function updateCartTotals() {
        var subtotal = 0;

        // Loop through each product card
        $('.card').each(function() {
            var quantity = parseInt($(this).find('.quantity').text());
            var price = parseFloat($(this).find('.price').text().replace('$', ''));
            subtotal += quantity * price;
        });

        // Update subtotal, tax, and total display
        var taxRate = 0.15; // Example tax rate
        var tax = subtotal * taxRate;
        var total = subtotal + tax;

        $('.subtotal').text('$' + subtotal.toFixed(2));
        $('.tax').text('$' + tax.toFixed(2));
        $('.total').text('$' + total.toFixed(2));
    }
});

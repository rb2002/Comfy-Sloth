export const formatPrice = (number) => {
    return Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
    }).format(number/100)
}

export const getUniqueValues = () => {}

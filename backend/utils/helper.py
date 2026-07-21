def get_customer_segment(cluster):

    segments = {

        0: {
            "Customer Segment": "Regular Customer",
            "Description": "Medium income and medium spending.",
            "Business Strategy": "Offer loyalty rewards and seasonal discounts."
        },

        1: {
            "Customer Segment": "Premium Customer",
            "Description": "High income and high spending.",
            "Business Strategy": "Provide VIP memberships and premium services."
        },

        2: {
            "Customer Segment": "Potential Customer",
            "Description": "High income but low spending.",
            "Business Strategy": "Increase engagement with personalized offers."
        },

        3: {
            "Customer Segment": "Budget Customer",
            "Description": "Low income and low spending.",
            "Business Strategy": "Provide discounts and budget-friendly products."
        },

        4: {
            "Customer Segment": "Impulse Buyer",
            "Description": "Low income but high spending.",
            "Business Strategy": "Offer affordable bundles and cashback promotions."
        }

    }

    return segments.get(cluster, {
        "Customer Segment": "Unknown",
        "Description": "Cluster not found.",
        "Business Strategy": "No strategy available."
    })
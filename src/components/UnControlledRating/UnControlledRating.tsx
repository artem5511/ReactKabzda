import React from "react";
import {Star} from "../Star/Star";

type TypeRatingProps = {
    value: 0 | 1 | 2 | 3 | 4 |5
}

export const UnControlledRating = (props: TypeRatingProps) => {

        return (
            <div>
                <Star selected={(props.value > 0)}/><button>1</button>
                <Star selected={(props.value > 1)}/><button>2</button>
                <Star selected={(props.value > 2)}/><button>3</button>
                <Star selected={(props.value > 3)}/><button>4</button>
                <Star selected={(props.value > 4)}/><button>5</button>
            </div>
        )
    }

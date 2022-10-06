import { range } from "lodash";

const Builder = (walls) => {
    const actions = { walls: [] };

    actions.unitRemover = function ({ x, y, z }) {
        const elementIndex = walls.findIndex(
            ({ position: [e_x, e_y, e_z] }) =>
                e_x === x && e_y === y && e_z === z
        );

        if (elementIndex !== -1) {
            walls.splice(elementIndex, 1);
            actions.walls = walls;
            return actions;
        }

        actions.walls = walls;
        return actions;
    };

    actions.addX = function ({
        x: { from: fromX, to: toX },
        y: { from: fromY, to: toY },
        z,
        direction = "towards",
    }) {
        let a, b;
        toX < 0 ? (a = -1) : (a = 1);
        toY < 0 ? (b = -1) : (b = 1);
        actions.walls = [
            ...actions.walls,
            ...range(fromY, toY + b)
                .map((y_coord) =>
                    range(fromX, toX + a).map((x_coord) => ({
                        position: [x_coord, y_coord, z],
                        direction,
                    }))
                )
                .flat(),
        ];

        return actions;
    };

    actions.addZ = function ({
        x,
        y: { from: fromY, to: toY },
        z: { from: fromZ, to: toZ },
        direction = "towards",
    }) {
        let a, b;
        toZ < 0 ? (a = -1) : (a = 1);
        toY < 0 ? (b = -1) : (b = 1);
        actions.walls = [
            ...actions.walls,
            ...range(fromY, toY + b)
                .map((y_coord) =>
                    range(fromZ, toZ + a).map((z_coord) => ({
                        position: [x, y_coord, z_coord],
                        direction,
                    }))
                )
                .flat(),
        ];

        return actions;
    };

    actions.addY = function ({
        x: { from: fromX, to: toX },
        y,
        z: { from: fromZ, to: toZ },
        direction = "towards",
    }) {
        let a, b;
        toX < 0 ? (a = -1) : (a = 1);
        toZ < 0 ? (b = -1) : (b = 1);
        actions.walls = [
            ...actions.walls,
            ...range(fromX, toX + a)
                .map((x_coord) =>
                    range(fromZ, toZ + b).map((z_coord) => ({
                        position: [x_coord, y, z_coord],
                        direction,
                    }))
                )
                .flat(),
        ];

        return actions;
    };

    return actions;
};

export default Builder;
